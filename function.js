function file_reader(file) {

    let file_variable = file.files[0];

    let reader = new FileReader();

    reader.readAsText(file_variable);

    reader.onload = function() {
        let file_data = reader.result;
        let gene_string = file_data.split('\n\n');
        let i = 0;
        for (i = 0; i < gene_string.length; i ++) {
            gene_string[i] = gene_string[i].replace(/(\r\n|\n|\r)/gm,"");
            gene_string[i] = gene_string[i].split(" ").join("");
            gene_string[i] = gene_string[i].toUpperCase();
        }
        let text = gene_string[0];
        let pattern = gene_string[1];
        let count = 0;
        let n = pattern.length;
        let a = "";
        let m = text.length;
        for (i = 0; i < m - n + 1; i ++) {
            a = text.substr(i, n);
            if (a == pattern) {
                count = count + 1;
            }
        }

        document.getElementById("zeltron").innerHTML = '<tr><td><button class = "button button1" onClick = "reload()">Reload</button></td></tr>';

        document.getElementById("zeltron5").innerHTML = count;
    };

    reader.onerror = function() {
        console.log(reader.error);
    };
}

function file_reader1(file) {

    let file_variable = file.files[0];

    let reader = new FileReader();

    reader.readAsText(file_variable);

    reader.onload = function() {
        let file_data = reader.result;
        let gene_string = file_data.split('\n\n');
        for (i = 0; i < gene_string.length; i ++) {
            gene_string[i] = gene_string[i].replace(/(\r\n|\n|\r)/gm,"");
            gene_string[i] = gene_string[i].split(" ").join("");
            gene_string[i] = gene_string[i].toUpperCase();
        }

        let text = gene_string[1];
        let pattern = gene_string[0];
        let count = [];
        let n = pattern.length;
        let a = "";
        let m = text.length;
        for (i = 0; i < m - n + 1; i ++) {
            a = text.substr(i, n);
            if (a == pattern) {
                count.push(i);
            }
        }

        count = count.join(" ");
        document.getElementById("zeltron").innerHTML = '<tr><td><button class = "button button1" onClick = "reload()">Reload</button></td></tr>';

        document.getElementById("zeltron5").innerHTML = count;
    };

    reader.onerror = function() {
        console.log(reader.error);
    };
}

function file_reader2(file) {

    let file_variable = file.files[0];

    let reader = new FileReader();

    reader.readAsText(file_variable);

    reader.onload = function() {
        let file_data = reader.result;
        let gene_string = file_data.split('\n\n');
        for (i = 0; i < gene_string.length; i ++) {
            gene_string[i] = gene_string[i].replace(/(\r\n|\n|\r)/gm,"");
            gene_string[i] = gene_string[i].split(" ").join("");
            gene_string[i] = gene_string[i].toUpperCase();
        }

        let text = gene_string[0];
        let number = parseInt(gene_string[1]);

        function pattern_count(text, pattern) {
            let count = 0;
            for (i = 0; i < (text.length - pattern.length + 1); i ++) {
                a = text.substr(i, pattern.length);
                if (a == pattern) {
                    count = count + 1;
                }
            }
            return count;
        }

        let pattern = "";
        let maxcount = 0;
        let arraylist = [];
        let frequentlist = [];
        let lt = text.length;
        for (let i = 0; i < (lt - number); i ++) {
            pattern = text.substring(i, i + number);
            arraylist.push(pattern_count(text, pattern));
        }

        maxcount = arraylist[0];
        for (let k = 0; k < arraylist.length; k ++) {
            if (maxcount < arraylist[k]) {
                maxcount = arraylist[k];
            }
        }
        for (let j = 0; j < (lt-number); j ++) {
            if (arraylist[j] == maxcount) {
                frequentlist.push(text.substring(j, j + number));
            }
        }

        function removeduplicates(data) {
           return data.filter((value, index) => data.indexOf(value) === index);
       }

       let frequentlist1 = removeduplicates(frequentlist);
       frequentlist1 = frequentlist1.join(" ");
       document.getElementById("zeltron").innerHTML = '<td colspan = "6" align = "center"><button class = "button button1" onClick = "reload()">Reload</button></td>';

       document.getElementById("zeltron5").innerHTML = frequentlist1;
    };

    reader.onerror = function() {
        console.log(reader.error);
    };
}

function file_reader3(file) {

    let file_variable = file.files[0];

    let reader = new FileReader();

    reader.readAsText(file_variable);

    reader.onload = function() {
        let file_data = reader.result;
        let gene_string = file_data.split('\n\n');
        for (i = 0; i < gene_string.length; i ++) {
            gene_string[i] = gene_string[i].replace(/(\r\n|\n|\r)/gm,"");
            gene_string[i] = gene_string[i].split(" ").join("");
            gene_string[i] = gene_string[i].toUpperCase();
        }
        let a = gene_string[0];
        let b = [];
        let c = [];
        let stri = "";
        for (let i = 0; i < a.length; i ++) {
            if (a.charAt(i) == "A") {
                b.push("T");
            } else if (a.charAt(i) == "C") {
                b.push("G");
            } else if (a.charAt(i) == "G") {
                b.push("C");
            } else if (a.charAt(i) == "T") {
                b.push("A");
            }
        }

        for (let j = (b.length - 1); j >= 0; j --) {
            c.push(b[j]);
        }

        c = c.join("");
        document.getElementById("zeltron").innerHTML = '<tr><td><button class = "button button1" onClick = "reload()">Reload</button></td></tr>';

        document.getElementById("zeltron5").innerHTML = c;
    };

    reader.onerror = function() {
        console.log(reader.error);
    };
}

function file_reader5(file) {

    let file_variable = file.files[0];

    let reader = new FileReader();

    reader.readAsText(file_variable);

    reader.onload = function() {
        let file_data = reader.result;
        let gene_string = file_data.split('\n\n');
        for (i = 0; i < gene_string.length; i ++) {
            gene_string[i] = gene_string[i].replace(/(\r\n|\n|\r)/gm,"");
            gene_string[i] = gene_string[i].split(" ").join("");
            gene_string[i] = gene_string[i].toUpperCase();
        }

        let g = gene_string[0];
        function skew(g) {
            let arr = [];
            arr[0] = 0;
            for (let i = 1; i < (g.length + 1); i ++) {
                if (g.charAt(i - 1) == "G") {
                    arr[i] = arr[i - 1] + 1;
                } else if (g[i - 1] == "C") {
                    arr[i] = arr[i - 1] - 1;
                } else {
                    arr[i] = arr[i - 1];
                }
            }
            return arr;
        }

        let p = [];
        let s = skew(g);
        let small = s[0];
        for (let y = 0; y < s.length; y ++) {
            if (s[y] < small) {
                small = s[y];
            }
        }
        let m = small;
        console.log(m);
        for (let [k, v] of Object.entries(s)) {
            if (v == m) {
                p.push(k);
            }
        }
        let stringr = "";
        for (let r = 0; r < p.length; r ++) {
            stringr = stringr + p[r] + " ";
        }

        document.getElementById("zeltron").innerHTML = '<tr><td><button class = "button button1" onClick = "reload()">Reload</button></td></tr>';

        document.getElementById("zeltron5").innerHTML = stringr;
    };

    reader.onerror = function() {
        console.log(reader.error);
    };
}

function file_reader7(file) {

    let file_variable = file.files[0];

    let reader = new FileReader();

    reader.readAsText(file_variable);

    reader.onload = function() {
        let file_data = reader.result;
        let gene_string = file_data.split('\n\n');
        for (i = 0; i < gene_string.length; i ++) {
            gene_string[i] = gene_string[i].replace(/(\r\n|\n|\r)/gm,"");
            gene_string[i] = gene_string[i].split(" ").join("");
            gene_string[i] = gene_string[i].toUpperCase();
        }

        let p = gene_string[0];
        let q = gene_string[1];
        let ham = 0;
        let length = 0;

        if (gene_string[0].length < gene_string[1].length) {
            length = gene_string[0].length;
        } else {
            length = gene_string[1].length;
        }

        for (let i = 0; i < length; i ++) {
            if (p.charAt(i) != q.charAt(i)) {
                ham = ham + 1;
            }
        }

        document.getElementById("zeltron").innerHTML = '<tr><td><button class = "button button1" onClick = "reload()">Reload</button></td></tr>';

        document.getElementById("zeltron5").innerHTML = ham;
    };

    reader.onerror = function() {
        console.log(reader.error);
    };
}

function reload() {
    location.reload();
}
