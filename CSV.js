
const parseCSVFile = (csvFile) => {
  
  const fileExtension = csvFile.split('.')[1].toLowerCase();
  if(csvFile && fileExtension !== 'csv') {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const txt = e.target.result;
      document.write(txt);
    }
    reader.readAsText(csvFile);
  }
  else { return; }
}

const createTable = (textData) => {
  const delimiter = ',', newLine = '\n';
}
