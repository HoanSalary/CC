function addStudent() {
    var name = document.getElementById("studentName").value;
    var studentClass = document.getElementById("studentClass").value;
    var studentMajor = document.getElementById("studentMajor").value;
    var studentHometown = document.getElementById("studentHometown").value;
    var studentPhone = document.getElementById("studentPhone").value;
  
    if (name && studentClass && studentMajor && studentHometown && studentPhone) {
      var table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
      var newRow = table.insertRow(table.rows.length);
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      var cell3 = newRow.insertCell(2);
      var cell4 = newRow.insertCell(3);
      var cell5 = newRow.insertCell(4);
      var cell6 = newRow.insertCell(5);
  
      cell1.innerHTML = name;
      cell2.innerHTML = studentClass;
      cell3.innerHTML = studentMajor;
      cell4.innerHTML = studentHometown;
      cell5.innerHTML = studentPhone;
      cell6.innerHTML = '<button type="button" onclick="editStudent(this)">Sửa</button>' +
                        '<button type="button" onclick="deleteStudent(this)">Xóa</button>';
  
      // Clear input fields after adding a student
      document.getElementById("studentName").value = "";
      document.getElementById("studentClass").value = "";
      document.getElementById("studentMajor").value = "";
      document.getElementById("studentHometown").value = "";
      document.getElementById("studentPhone").value = "";
    }
  }
  
  function editStudent(button) {
    var row = button.parentNode.parentNode;
    var name = row.cells[0].innerHTML;
    var studentClass = row.cells[1].innerHTML;
    var studentMajor = row.cells[2].innerHTML;
    var studentHometown = row.cells[3].innerHTML;
    var studentPhone = row.cells[4].innerHTML;
  
    if (confirm("Bạn có muốn sửa thông tin sinh viên này không?")) {
      document.getElementById("studentName").value = name;
      document.getElementById("studentClass").value = studentClass;
      document.getElementById("studentMajor").value = studentMajor;
      document.getElementById("studentHometown").value = studentHometown;
      document.getElementById("studentPhone").value = studentPhone;
  
      // Remove the edited row
      row.parentNode.removeChild(row);
    }
  }
  
  function deleteStudent(button) {
    var row = button.parentNode.parentNode;
    
    if (confirm("Bạn có chắc chắn muốn xóa sinh viên này không?")) {
      row.parentNode.removeChild(row);
    }
  }
  
  function searchStudents() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("studentTable");
    tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  