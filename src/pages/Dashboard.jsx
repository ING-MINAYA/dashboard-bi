import CardMetric from "../components/CardMetric";

function Dashboard() {
    return(
    <div className="container">
        <h1>Dashboard</h1>
        
            <div className="metrics">
                <CardMetric titulo="Ventas Totales" valor="$25,000" />
                <CardMetric titulo="Clientes Nuevos" valor="120" />
                <CardMetric titulo="Productos Vendidos" valor="540" />
                <CardMetric titulo="Ganancias" valor="$8,500" />
            </div>
        </div>
    );
}

export default Dashboard;