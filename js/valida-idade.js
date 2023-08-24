export default function ehMaiorDeIdade(data) {
  const dataAtual = new Date();
  const dataNascimentoConvertida = new Date(
    data.getUTCFullYear() + 18,
    data.getUTCMonth(),
    data.getUTCDay()
  );
  return dataAtual >= dataNascimentoConvertida;
}
