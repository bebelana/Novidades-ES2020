const doPrint = async (value) => {
    const Print = await import('./print.js');

    Print.print(value)
};

doPrint('Importação dinamica !');