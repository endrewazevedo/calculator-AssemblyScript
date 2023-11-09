// Define uma função que recebe dois números e retorna a soma deles
export function add(a: f64, b: f64): f64 {
  return a + b;
}

// Define uma função que recebe dois números e retorna a subtração deles
export function sub(a: f64, b: f64): f64 {
  return a - b;
}

// Define uma função que recebe dois números e retorna a multiplicação deles
export function mul(a: f64, b: f64): f64 {
  return a * b;
}

// Define uma função que recebe dois números e retorna a divisão deles
export function div(a: f64, b: f64): f64 {
  // Verifica se o divisor é diferente de zero
  if (b != 0) {
    return a / b;
  } else {
    // Retorna um valor especial que representa infinito
    return f64.POSITIVE_INFINITY;
  }
}
