function laCajaDePandora(numero) {
  if (!Number.isInteger(numero)) {
    return 'Error: Debe ser un número entero';
  }
  
  // Si es par, devuelve binario; si es impar, hexadecimal
  return (numero % 2 === 0) 
    ? numero.toString(2)      // binario
    : numero.toString(16);    // hexadecimal
}
