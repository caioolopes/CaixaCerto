import type { CSSProperties, ReactNode } from "react";
import useSWR from "swr";

interface DatabaseDependencies {
  version: string;
  opened_connections: number;
  max_connections: number;
}

interface StatusApiResponse {
  updated_at: string;
  dependencies: {
    database: DatabaseDependencies;
  };
}

async function fetchAPI(key: string): Promise<StatusApiResponse> {
  const response = await fetch(key);

  if (!response.ok) {
    throw new Error(`Erro na requisição: ${response.statusText}`);
  }

  const responseBody: StatusApiResponse = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <header style={styles.header}>
          <div style={styles.statusIndicator} />
          <h1 style={styles.title}>System Status</h1>
        </header>

        <UpdatedAt />
        <DatabaseStatus />
      </div>
    </main>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR<StatusApiResponse>(
    "/api/v1/status",
    fetchAPI,
    {
      refreshInterval: 2000,
    }
  );

  let updatedAtText = "Carregando...";

  if (!isLoading && data) {
    updatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");
  }

  return (
    <div style={styles.updatedAtContainer}>
      <span style={styles.updatedAtLabel}>Última atualização:</span>
      <span style={styles.updatedAtValue}>{updatedAtText}</span>
    </div>
  );
}

function DatabaseStatus() {
  const { isLoading, data } = useSWR<StatusApiResponse>(
    "/api/v1/status",
    fetchAPI,
    {
      refreshInterval: 2000,
    }
  );

  let databaseStatusInformation: ReactNode = (
    <div style={styles.loadingText}>Carregando dados do banco...</div>
  );

  if (!isLoading && data) {
    databaseStatusInformation = (
      <div style={styles.metricsGrid}>
        <div style={styles.metricItem}>
          <span style={styles.metricLabel}>Versão</span>
          <span style={styles.metricValue}>
            {data.dependencies.database.version}
          </span>
        </div>
        <div style={styles.metricItem}>
          <span style={styles.metricLabel}>Conexões Abertas</span>
          <span style={styles.metricHighlight}>
            {data.dependencies.database.opened_connections}
          </span>
        </div>
        <div style={styles.metricItem}>
          <span style={styles.metricLabel}>Conexões Máximas</span>
          <span style={styles.metricValue}>
            {data.dependencies.database.max_connections}
          </span>
        </div>
      </div>
    );
  }

  return (
    <section style={styles.databaseSection}>
      <h2 style={styles.subtitle}>Database</h2>
      {databaseStatusInformation}
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#030712", // Preto quase absoluto (Gray 950)
    color: "#f8fafc",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    boxSizing: "border-box",
  },
  card: {
    backgroundColor: "#0b1329", // Preto azulado escuro
    border: "1px solid #1e3a8a", // Azul marinho suave
    borderRadius: "16px",
    padding: "32px",
    width: "100%",
    maxWidth: "540px",
    boxShadow: "0 10px 30px -10px rgba(14, 165, 233, 0.15)",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "16px",
  },
  statusIndicator: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#38bdf8", // Azul ciano de status ativo
    boxShadow: "0 0 12px #38bdf8",
  },
  title: {
    fontSize: "24px",
    fontWeight: 700,
    color: "#ffffff",
    margin: 0,
    letterSpacing: "-0.5px",
  },
  updatedAtContainer: {
    display: "flex",
    gap: "8px",
    fontSize: "14px",
    marginBottom: "24px",
    paddingBottom: "16px",
    borderBottom: "1px solid #172554",
  },
  updatedAtLabel: {
    color: "#94a3b8",
  },
  updatedAtValue: {
    color: "#60a5fa", // Azul claro
    fontWeight: 500,
  },
  databaseSection: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  subtitle: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#38bdf8", // Azul vibrante
    margin: 0,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  metricsGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  metricItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#030712",
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid #1d4ed8", // Borda azul
  },
  metricLabel: {
    color: "#94a3b8",
    fontSize: "14px",
  },
  metricValue: {
    color: "#f8fafc",
    fontFamily: 'monospace',
    fontWeight: 600,
    fontSize: "15px",
  },
  metricHighlight: {
    color: "#60a5fa", // Destaque em azul
    fontFamily: 'monospace',
    fontWeight: 700,
    fontSize: "16px",
  },
  loadingText: {
    color: "#60a5fa",
    fontSize: "14px",
    fontStyle: "italic",
  },
};