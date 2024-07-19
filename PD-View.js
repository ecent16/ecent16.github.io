
const eventHandler = () => {
   const fileInput = document.getElementById('fileInput');
  fileInput.addEventListener('change', () => {
    if(fileInput !== null || fileInput.files.length > 0) {
      populateTable(fileInput)
    } 
    else { return false; }
  }
  
}

const populateTable = (file) => {
  // 
  const table = document.getElementById('mainTable');
  const parsedFile = parseCSVFile(file);
  console.log(csvFile);

}
