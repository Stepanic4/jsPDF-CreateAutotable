function generate() {
    var doc = new jsPDF('p', 'mm', 'a4');

    var specialElementHandlers = {
        '#ignorePDF': function (element, renderer) {
            console.log("test do not work");
            return true;
        }
    };


    var comName = $(".companyName").text();
    doc.setFontType("bold");
    doc.setFontSize(18);
    doc.text(105, 20, comName, 'center');

// ===========================Company info===================
    var comInf = $(".titleInfo").text();
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(14);
    doc.text(15, 37, comInf);

    var inf1 = $(".inf-1");
    doc.setFontType("normal");
    doc.setTextColor(87, 87, 87);
    doc.setFontSize(10);
    doc.text(15, 43, inf1.text());

    var inf2 = $(".inf-2").text();
    doc.text(15, 47, inf2);

    var inf3 = $(".inf-3").text();
    doc.text(15, 51, inf3);

    var inf4 = $(".inf-4").text();
    doc.text(15, 55, inf4);

    var inf5 = $(".inf-5").text();
    doc.text(15, 59, inf5);

// ========================End company=======================
// ======================Company address=====================

    var titleAddr = $(".titleAddress").text();
    doc.setTextColor(0, 0, 0);
    doc.setFontType("bold");
    doc.setFontSize(14);
    doc.text(195, 37, titleAddr, 'right');

    var adr1 = $(".adr-1").text();
    doc.setFontType("normal");
    doc.setTextColor(242, 224, 22);
    doc.setFontSize(10);
    doc.text(195, 43, adr1, 'right');

    var adr2 = $(".adr-2").text();
    doc.setTextColor(87, 87, 87);
    doc.text(195, 47, adr2, 'right');

    var adr3 = $(".adr-3").text();
    doc.text(195, 51, adr3, 'right');

    var adr4 = $(".adr-4").text();
    doc.text(195, 55, adr4, 'right');

    var adr5 = $(".adr-5").text();
    doc.setTextColor(156, 204, 101);
    doc.text(195, 59, adr5, 'right');


// ========================End client=======================

    var imgData = 'data:image/png;base64,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';
    doc.addImage(imgData, 'png', 80, 270, null, null, 'center' );
// ==========================TAble==========================

    var elem = document.getElementById('example');
    var data = doc.autoTableHtmlToJson(elem);

    doc.autoTable(data.columns, data.rows, {

        styles: {
            font: 'Arial',
            overflow:'linebreak',
            cellWidth: 'wrap',
            lineColor: 200,
            lineWidth: 0.1,
            'elementHandlers': specialElementHandlers
        },

        alternateRowStyles: {
            fillColor: [255, 255, 255]
        },

        //This is the style of the entire column
        columnStyles: {
            4: {
                halign: 'right',
                columnWidth: 25
            },
            3: {
                halign: 'right',
                columnWidth: 35
            },
            2: {
                halign: 'left'
            },
            1: {
                halign: 'left',
                columnWidth: 45
            },
            0: {
                halign: 'center',
                columnWidth: 8
            }
        },
        headerStyles: {
            fillColor: [255, 255, 255],
            lineColor: false,
            lineWidth: 0
        },
        bodyStyles: {
            fillColor: [255, 255, 255],
            fontSize: 9,
            textColor: 50,
            halign: 'right'
        },
        startY: 60,
        createdCell: function (cell, data) {
            if (data.row.index === 0) {

                cell.styles.fontStyle = 'bold';
                cell.styles.fontSize = 9;
                cell.styles.fillColor = [178,178,178];
            }
        },
        drawCell: function (cell, data) {
            if (data.row.index === data.table.rows.length - 1) {
                doc.setFontStyle('bold');
                doc.setFillColor(231, 247, 5);
            }
        }
    });

// ==========================end table===================

    // ==============Data name invoice===============
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10) {
        dd = '0'+dd
    }
    if(mm<10) {
        mm = '0'+mm
    }
    today = yyyy + '/' + mm + '/' + dd;
    var namePdf = 'MyTable' + '-' + today + '.pdf';
    doc.save(namePdf);
    // ===========END data name invoice==============
}

$('.download-pdf').click(function (e) {
    e.preventDefault();
    generate();
});

// ========================================END PDF=======================================