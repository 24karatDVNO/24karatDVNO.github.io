function changeClass1() {
	var fs = require(['fs']);
	var test = require(['./FE1Classes.json']);

	document.getElementById('clmhp1').value = test.Lord.stats[0];

	/*
	// Locate the selected class and update its information
	var class1 = document.getElementById("class1").value;
	for (let i = 0; i < classInfo.length; i++) {
		if (classInfo[i][0] == class1) {
			document.getElementById('clmhp1').value = classInfo[i][1];
			document.getElementById('clstr1').value = classInfo[i][2];
			document.getElementById('clskl1').value = classInfo[i][3];
			document.getElementById('clwlv1').value = classInfo[i][4];
			document.getElementById('clspd1').value = classInfo[i][5];
			document.getElementById('cllck1').value = classInfo[i][6];
			document.getElementById('cldef1').value = classInfo[i][7];
			document.getElementById('clres1').value = classInfo[i][8];
			document.getElementById('clmov1').value = classInfo[i][9];
			document.getElementById('clexp1').value = classInfo[i][10];
			document.getElementById('clwpn1').value = classInfo[i][11];
			break;
		}
	}
	*/
}