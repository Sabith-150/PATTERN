// opposite-rigt triangle

for(i=1;i<=5;i++){
    var a = ""

    for(j=1;j<=i;j++){
        var b = "  "
        a = a + b
        
    }
    for(k=1;k<=6-i;k++){
        var b = "* "
        a = a + b
    }

    console.log(a)
}