import Link from "next/link";


export default function NotFound() {

    return (
        <main className="text-center contPrincipal pt-5">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            
            <Link href="/">
                Go back home
            </Link>
        </main>
    );
}
     