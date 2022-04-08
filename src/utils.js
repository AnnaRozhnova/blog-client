 async function sendRequest(url) {
    let data = await fetch(url).then(response => response.json());
    return data
  }

 function kitcut(text, limit) {
    text = text.trim();
    if( text.length <= limit) return text;
  
    text = text.slice(0, limit);
    var lastIndex = text.lastIndexOf(" ");
    return text.substring(0, lastIndex).trim() + "...";
  }

export default sendRequest;
  export { kitcut };