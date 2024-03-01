let students = [];

function addStudent() {
    const nameInput = document.getElementById('nameInput');
    const gradeInput = document.getElementById('gradeInput');

    const name = nameInput.value.trim();
    const grade = parseFloat(gradeInput.value);

    if (name !== '' && !isNaN(grade) && grade >= 1 && grade <= 5) {
        students.push({ name, grade });
        nameInput.value = '';
        gradeInput.value = '';
        renderStudents();
    } else {
        alert('Valami nem jó');
    }
}

function renderStudents() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';

    students.forEach((student, index) => {
        const li = document.createElement('li');
        li.textContent = `${student.name}: ${student.grade}`;

        const editButton = document.createElement('button');
        editButton.textContent = 'Szerkesztés';
        editButton.onclick = () => editStudent(index);
        li.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Törlés';
        deleteButton.onclick = () => deleteStudent(index);
        li.appendChild(deleteButton);

        studentList.appendChild(li);
    });

    const averageGrade = calculateAverageGrade();
    const averageDisplay = document.getElementById('averageDisplay');
    averageDisplay.textContent = `Átlag: ${averageGrade}`;
}

function editStudent(index) {
    const newName = prompt('Szerkeszd a diák nevét:');
    const newGrade = parseFloat(prompt('Szerkeszd a diák jegyét:'));

    if (newName !== null && !isNaN(newGrade) && newGrade >= 1 && newGrade <= 5) {
        students[index] = { name: newName, grade: newGrade };
        renderStudents();
    }
}

function deleteStudent(index) {
    if (confirm('Biztos törölni akarod?')) {
        students.splice(index, 1);
        renderStudents();
    }
}

function calculateAverageGrade() {
    if (students.length === 0) {
        return 0;
    }
    const totalGrade = students.reduce((sum, student) => sum + student.grade, 0);
    return (totalGrade / students.length).toFixed(2);
}

window.onload = renderStudents;
