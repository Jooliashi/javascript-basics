let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  let summary = { studentGrades: [], exams: [], }
  for (let student in scores) {
    let letterScore = computeLetterScore(scores[student].scores);
    summary.studentGrades.push(letterScore);

    scores[student].scores.exams.forEach((score, index) => {
      summary.exams[index] ||= [];
      summary.exams[index].push(score);
    });
  };

  summary.exams = summary.exams.map(exam => {
    return examInfo(exam);
  });

  return summary;
}

function examInfo(exam) {
  let info = {};
  info.average = exam.reduce((sum, exam) => exam + sum) / exam.length;
  info.minimum = exam.reduce((min, exam) => min < exam ? min : exam);
  info.maximun = exam.reduce((max, exam) => max > exam? max : exam);
  return info;
}

function computeLetterScore(score) {
  let examTotal = score.exams.reduce((sum, exam) => sum + exam);
  let examScore =  examTotal / 4;
  let exerciseTotal = score.exercises.reduce((sum, exam) => sum + exam);
  let finalScore = examScore * 0.65 + exerciseTotal * 0.35
  return letterScore(finalScore);
}

function letterScore(score) {
  let letter = '';
  if (score >= 93) {
    letter = ' (A)';
  } else if (score >= 85) {
    letter = ' (B)';
  } else if (score >= 77) {
    letter = ' (C)';
  } else if (score >= 69) {
    letter = ' (D)';
  } else if (score >= 60) {
    letter = ' (E)';
  } else {
    letter = ' (F)';
  }
  return String(score.toFixed(0)) + letter;
}
console.log(generateClassRecordSummary(studentScores));

