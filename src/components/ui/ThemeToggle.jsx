import { useEffect, useState } from 'react';

export function ThemeToggle({ theme, onThemeChange }) {
    return (
        <button 
            onClick={onThemeChange}
            className="btn btn-circle"
        >
            {theme === 'dracula' ? '☀️' : '🌙'}
        </button>
    );
} 