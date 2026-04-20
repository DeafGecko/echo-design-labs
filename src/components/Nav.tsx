interface NavProps {
      logoText: string;
}

function Nav({ logoText}: NavProps) {
      return (
            <nav className="border-b border-white/10 px-6 py-4">
                  <h1 className="text-xl font-bold">{logoText}</h1>
            </nav>
      );
}

export default Nav;