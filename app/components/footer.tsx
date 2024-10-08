export default function Footer() {
    return (
        <footer className="bg-blue-100 border-t-4 border-blue-500 rounded-b px-4 py-3 shadow-md flex" role="alert">
            <div className="py-2">
                <svg className="fill-current h-6 w-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg>
            </div>
            <div>
                <p className="font-bold text-gray-900">Disclaimer</p>
                <p className="text-sm">This website does not serve to replace medical advice. We do not assume responsibility in case of injury.</p>
            </div>
        </footer>
    );
}