import { ThemeToggle } from './ui/ThemeToggle';

export function Navbar({ onThemeToggle, currentTheme }) {
    return (
        <div className="navbar bg-base-100">
            {/* Otros elementos del navbar */}
            <ThemeToggle onThemeToggle={onThemeToggle} currentTheme={currentTheme} />
        </div>
    );
} 