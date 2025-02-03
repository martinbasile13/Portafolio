export function Layout({ children }) {
    return (
        <div className="min-h-screen">
            <main className="container mx-auto px-4">
                {children}
            </main>
        </div>
    );
} 