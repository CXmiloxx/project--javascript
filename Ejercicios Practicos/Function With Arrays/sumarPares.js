function acabanEnA(words) {
    // tu código aquí
    for (let i = 0; i < words.length; i++) {
      if (words[i].endsWith('a')) {
        // Si encuentra una palabra que termina en 'a', devuelve true
        return true;
      }
    }
    // Si llega aquí, significa que ninguna palabra termina en 'a', devuelve false
    return false;
  }
  
  const words = ['alejo', 'andreo', 'marl0'];
  
  console.log(acabanEnA(words));
  