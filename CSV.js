
const parseCSVFile = (csvFile) => {
  
  if(!csvFile || FileReader) { return; }
  else {
    const fileExtension = fileName.split('.')[1].toLowerCase();
    if(fileExtension !== 'csv') {
      const reader = new FileReader();
      reader.onload = (e) => {
      const txt = e.target.result;
      document.write(txt);
    }
      return reader.readAsText(fileName);
    }
    else { return }
}

  const formatCSVFile = () => {
    
  }
