
  
 
  
 

                  
  async function help(){
    const req = await fetch('../text/wordlist1.txt');
    const txt = await req.text();
    const options = txt.split('\n');
    const prompts = 
    ['Write a poem using this word at the beginning of every line.',
    'Describe how this word tastes.',
    'Imagine this word as a person. Describe them.',
    'Create an anagram with this word.', 
    'Write a list poem using the letters of this word.',
    'Change the definition of this word using only the words from the original definition.',
    'Draw how this word feels with your eyes closed.',
    'Say this word outloud 15 times. Clap along.', 
    'Write a love letter. Use this word three times.',
    'Play a song that has this word in the title.',
    'Dance to the vibe of this word.',
    'Trace this word on the back of someone you love. Have them guess what you are writing.',
    'Incorporate this word into the next three sentences you speak to another person.',
    'Bake a cake and write this word on top. Gift it to a stranger.',
    'Make a new definition of this word.',
    'Write a haiku about this word.',
    'Call someone, say only this word, then hang up.'];

    const randOptionNum = Math.floor(Math.random() * options.length);
    const randPromptsNum = Math.floor(Math.random() * prompts.length);
    const res = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+ options[randOptionNum])
    const json = await res.json()
    console.log(json)
    const meanings = json[0].meanings
    console.log(meanings[0].definitions[0])

  
    document.getElementById('doThis').innerHTML = options[randOptionNum];

    document.getElementById('define').innerHTML = meanings[0].definitions[0].definition;

    document.getElementById('prompts').innerHTML = prompts[randPromptsNum];

    
    
  }


	function writeWord (word) {
    document.body.style.marginTop = '50px'
    document.body.style.textAlign = 'center'
    document.body.style.fontSize = '20px'
    document.body.textContent = word
  }

  function writeDefinition (){
    document.body.style.marginTop = '50px'
    document.body.style.textAlign = 'center'
    document.body.style.fontSize = '20px'
    document.body.textContent = ''
  }

  function writePrompts () {
    document.body.style.marginTop = '50px'
    document.body.style.textAlign = 'center'
    document.body.style.fontSize = '20px'
    document.body.textContent = ''
  }
 

  



