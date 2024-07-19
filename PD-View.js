
const populateTable = (csvData) => {
  // 
  const table = document.getElementById('mainTable');
  const fileInput = document.getElementById('fileInput');

  fileInput.addEventListener('change', () => {
    if(fileInput !== null || fileInput.files.length > 0) {
      const csvFile = parseCSVFile(fileInput);
      console.log(csvFile);
    }
    else { return; }
  });
}
