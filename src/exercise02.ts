export class InvalidDNAError extends Error {}
export function transcribeDNA(dna: string): string {
  let rna = '';
  for (const base of dna) {
    if (base === 'A'){
      rna += 'U';
    }
    else if (base === 'T'){
      rna += 'A';
    }
    else if (base === 'C'){
      rna += 'G';
    }
    else if (base === 'G'){
      rna += 'C';
    }
    else {
      throw new InvalidDNAError(`Invalid DNA Base: ${base} , Please Retry`)
    }
  }
  return rna;
}
