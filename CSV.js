
const parseCSVFile = (csvFile) => {
  
  const fileExtension = csvFile.split('.')[1].toLowerCase();
  if(csvFile && fileExtension !== 'csv') {
    const delimiter = ',', newLine = '\n';
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const txt = e.target.result;
      document.write(txt);
    }
    return reader.readAsText(csvFile);
  }
  else { return; }
}

const formatCSVFile = () => {
  
}
