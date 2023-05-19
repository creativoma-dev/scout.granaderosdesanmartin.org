const Footer = () => {
        const footerNavs = [
            {
                href: '#',
                name: 'Legales'
            },
            {
                href: '#',
                name: 'Privacidad'
            },
            {
                href: '#',
                name: 'Cookies'
            }
        ]
        return (
            <footer className="pt-10">
                <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto text-gray-600">
                    <div className="mt-10 py-10 border-t items-center justify-between flex">
                        <p className="dark:text-white">© 1997 ~ {new Date().getFullYear()} Granaderos de San Martín. Todos los derechos reservados.</p>
                        <ul className="flex flex-wrap items-center gap-4">
                            {
                                footerNavs.map((item, idx) => (
                                    <li key={idx} className="text-gray-700 hover:text-gray-700 duration-150 dark:text-white">
                                        <a href={item.href}>
                                            {item.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                        <a href="https://landing-with-astro.vercel.app/" className="text-gray-700 hover:text-gray-700 duration-150">¡Siempre Listos! ⚜️</a>
                    </div>
                </div>
            </footer>
        )
    };

    export default Footer;