export const languages = {
    en: 'English',
    es: 'Spanish',
};

export const defaultLang = 'en';

export const ui = {
    en: {
        'nav.home': 'Home',
        'nav.Tools': 'Tools',
        "description": "A space to learn electronics.",
        "lcd-editor-pro": "Advanced and powerful LCD characters editor online. Generally, LCD character editors only support one character, this tool supports multiple characters so you can make complex designs directly as a real LCD.",
        "serialgui-rs": "SerialGUI-Rs is a fast and efficient cross-platform serial terminal monitor written in Rust. It features a lightweight graphical interface for real-time monitoring of serial ports. Users can configure parameters like baud rate and parity easily, making it ideal for developers working with embedded systems and serial communication across multiple platforms.",
        "byte-analyzer":"Byte Analyzer is a tool to visualize and edit byte values, showing their representation in hexadecimal, binary, and various data types (e.g., uint8, uint16, int8, int16, int32, int64, etc). It allows users to input byte values in different formats and see how they translate across these representations, making it useful for debugging and data analysis tasks.",
    },
    es: {
        'nav.home': 'Inicio',
        'nav.Tools': 'Herramientas',
        "description": "Un sitio para aprender electronica.",
        "lcd-editor-pro": "Poderoso y avanzado editor de caracteres LCD online. Los editores para caracteres LCD solo soportan un carácter, esta herramienta soporta múltiples caracteres con lo que podrás hacer diseños complejos directamente como si fuera una lcd real. ",
        "serialgui-rs": "SerialGUI-Rs es un monitor de terminal serial multiplataforma, rápido y eficiente, escrito en Rust. Ofrece una interfaz gráfica liviana para la monitorización en tiempo real de puertos seriales. Permite configurar parámetros como la velocidad en baudios y la paridad, siendo ideal para desarrolladores que trabajan con sistemas embebidos y comunicación serial.",
        "byte-analyzer":"Byte Analyzer es una herramienta para visualizar y editar valores byte, mostrando su representación en hexadecimal, binario y varios tipos de datos (por ejemplo, uint8, uint16, int8, int16, int32, int64, etc.). Permite a los usuarios ingresar valores byte en diferentes formatos y ver cómo se traducen en estas representaciones, siendo útil para tareas de depuración y análisis de datos.",
    },
} as const;