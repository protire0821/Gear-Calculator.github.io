// Function to open a specific tab
function openTab(evt, mode) {
    // Hide all tab contents
    var tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');

    // Remove 'active' class from all tab links
    var tabLinks = document.querySelectorAll('.tab-link');

    tabLinks.forEach(link => link.classList.remove('active'));

    // Show the current tab, and add 'active' class to the button that opened the tab
    document.getElementById(mode).style.display = 'block';
    evt.currentTarget.classList.add('active');
}

// Function to handle calculation (placeholder function, needs proper implementation)
function calculate(mode) {
    var outputContent = document.getElementById('outputContent');
    // Perform calculation based on mode
    // This is just a placeholder, you should implement the actual calculation logic
    outputContent.textContent = `Calculation result for ${mode}`;
}

// Initialize the page with mode1 tab open
document.addEventListener('DOMContentLoaded', () => {
    openTab(new Event('click'), 'mode1');
});

//mode1
function spurgear(m,z1,z2,phi,x1,x2){
    const container = document.getElementById('outputContent');

//gear1
    let table = '<table border="gear1"><tr><th>齒輪1GEAR1</th><th>Value</th></tr>';

    table += `<tr><td>模數</td><td>${m}</td></tr>`;
    table += `<tr><td>齒數</td><td>${z1}</td></tr>`;
    table += `<tr><td>壓力角</td><td>${phi}</td></tr>`;
    table += `<tr><td>轉位係數</td><td>${x1}</td></tr>`;

    x1 = parseFloat(x1);
    x2 = parseFloat(x2);
    z1 = parseFloat(z1);
    z2 = parseFloat(z2);
    deg_phi = (phi* Math.PI)/ 180; //*(Math.PI/ 180)

    val1 = 2*(x1+x2)/(z1+z2)*Math.tan(deg_phi)+ Math.tan(deg_phi)-phi*0.01745;
    val2 =  24.4239; //查表
    val3 = (z1 + z2) / 2 * (Math.cos(deg_phi) / Math.cos(val2* Math.PI/ 180)- 1);
    val4 = (z2 + z1) / 2 * m + val3*m;
    val5 = m*z1;
    val6 = val5 * Math.cos(deg_phi);
    val7 = val6 / Math.cos(val2* Math.PI/ 180);
    val8 = 1;
    val9 = 0.25;
    val10 = (val8 + val3 - x2)* m;
    val11 = (val8 + val9 - x1) * m; 
    val12 = val10 + val11;
    val13 = val5 + 2*val10;
    val14 = val5 - 2*val11;
    val15 = (Math.acos(val6/ val13))*(180/Math.PI);


    table += `<tr><td>漸開線函數</td><td>${val1}</td></tr>`;
    table += `<tr><td>嚙合壓力角</td><td>${val2}</td></tr>`;
    table += `<tr><td>中心距變動係數</td><td>${val3}</td></tr>`;
    table += `<tr><td>中心距</td><td>${val4}</td></tr>`;
    table += `<tr><td>節圓直徑</td><td>${val5}</td></tr>`;
    table += `<tr><td>基圓直徑</td><td>${val6}</td></tr>`;
    table += `<tr><td>嚙合節圓直徑</td><td>${val7}</td></tr>`;
    table += `<tr><td>齒冠高係數</td><td>${val8}</td></tr>`;
    table += `<tr><td>齒頂隙係數</td><td>${val9}</td></tr>`;
    table += `<tr><td>齒冠高</td><td>${val10}</td></tr>`;
    table += `<tr><td>齒根高</td><td>${val11}</td></tr>`;
    table += `<tr><td>全齒高</td><td>${val12}</td></tr>`;
    table += `<tr><td>外徑</td><td>${val13}</td></tr>`;
    table += `<tr><td>齒頂圓直徑</td><td>${val14}</td></tr>`;
    table += `<tr><td>齒頂壓力角</td><td>${val15}</td></tr>`;

//gear2

    table += '<table border="gear2"><tr><th>齒輪2GEAR2</th><th>Value</th></tr>';
    table += `<tr><td>模數</td><td>${m}</td></tr>`;
    table += `<tr><td>齒數</td><td>${z2}</td></tr>`;
    table += `<tr><td>壓力角</td><td>${phi}</td></tr>`;
    table += `<tr><td>轉位係數</td><td>${x2}</td></tr>`;
    table += `<tr><td>漸開線函數</td><td>${val1}</td></tr>`;
    table += `<tr><td>嚙合壓力角</td><td>${val2}</td></tr>`;
    table += `<tr><td>中心距變動係數</td><td>${val3}</td></tr>`;
    table += `<tr><td>中心距</td><td>${val4}</td></tr>`;

    val2_1 = m*z2;
    val2_2 = val2_1 * Math.cos(deg_phi);
    val2_3 = val2_2 / Math.cos(val2* Math.PI/ 180);
    val2_4 = (val8 + val3 - x1)* m;
    val2_5 = (val8 + val9 - x2) * m;
    val2_6 = val2_4 + val2_5;
    val2_7 = val2_1 + 2*val2_4;
    val2_8 = val2_1 - 2*val2_5;
    val2_9 = (Math.acos(val2_2 / val2_7))*(180/Math.PI);

    table += `<tr><td>節圓直徑</td><td>${val2_1}</td></tr>`;
    table += `<tr><td>基圓直徑</td><td>${val2_2}</td></tr>`;
    table += `<tr><td>嚙合節圓直徑</td><td>${val2_3}</td></tr>`;
    table += `<tr><td>齒冠高係數</td><td>${val8}</td></tr>`;
    table += `<tr><td>齒頂隙係數</td><td>${val9}</td></tr>`;
    table += `<tr><td>齒冠高</td><td>${val2_4}</td></tr>`;
    table += `<tr><td>齒根高</td><td>${val2_5}</td></tr>`;
    table += `<tr><td>全齒高</td><td>${val2_6}</td></tr>`;
    table += `<tr><td>外徑</td><td>${val2_7}</td></tr>`;
    table += `<tr><td>齒頂圓直徑</td><td>${val2_8}</td></tr>`;
    table += `<tr><td>齒頂壓力角</td><td>${val2_9}</td></tr>`;

    
    table += '</table>';

    container.innerHTML = table;

}

function helixgear(m,z1,z2,phi,beta,x1,x2){
    const container = document.getElementById('outputContent');
    
//gear1
    let table = '<table border="gear1"><tr><th>gear1</th><th>Value</th></tr>';

    table += `<tr><td>模數</td><td>${m}</td></tr>`;
    table += `<tr><td>齒數</td><td>${z1}</td></tr>`;
    table += `<tr><td>壓力角</td><td>${phi}</td></tr>`;
    table += `<tr><td>螺旋角</td><td>${beta}</td></tr>`;
    table += `<tr><td>轉位係數</td><td>${x1}</td></tr>`;

    x1 = parseFloat(x1);
    x2 = parseFloat(x2);
    z1 = parseFloat(z1);
    z2 = parseFloat(z2);

    hval1 = (Math.atan(Math.tan(phi*(Math.PI/ 180)) /Math.cos(beta*(Math.PI/ 180))))*(180/Math.PI);

    val1 =  2 * (x1 + x2) / (z1 + z2) * Math.tan(phi*(Math.PI/ 180)) +  Math.tan(hval1*(Math.PI/ 180)) - hval1*0.01745;
    val2 =  23.106; //查表
    val3 = (z1 + z2) / 2 /Math.cos(beta*(Math.PI/ 180)) * (Math.cos(hval1*(Math.PI/ 180)) / Math.cos(val2*(Math.PI/ 180))- 1);
    val4 = (z2 + z1) / 2 /Math.cos(beta*(Math.PI/ 180)) * m + val3*m;
    val5 = m*z1/Math.cos(beta*(Math.PI/ 180));
    val6 = val5 * Math.cos(hval1*(Math.PI/ 180));
    val7 = val6 / Math.cos(val2*(Math.PI/ 180));
    val8 = 1;
    val9 = 0.25;
    val10 = (val8 + val3 - x2)* m;
    val11 = (val8 + val9 - x1) * m; 
    val12 = val10 + val11;
    val13 = val5 + 2*val10;
    val14 = val5 - 2*val11;
    val15 = (Math.acos(val6/ val13))*(180/Math.PI);

    
    table += `<tr><td>軸向壓力角</td><td>${hval1}</td></tr>`;
    table += `<tr><td>漸開線函數</td><td>${val1}</td></tr>`;
    table += `<tr><td>嚙合壓力角</td><td>${val2}</td></tr>`;
    table += `<tr><td>中心距變動係數</td><td>${val3}</td></tr>`;
    table += `<tr><td>中心距</td><td>${val4}</td></tr>`;
    table += `<tr><td>節圓直徑</td><td>${val5}</td></tr>`;
    table += `<tr><td>基圓直徑</td><td>${val6}</td></tr>`;
    table += `<tr><td>嚙合節圓直徑</td><td>${val7}</td></tr>`;
    table += `<tr><td>齒冠高係數</td><td>${val8}</td></tr>`;
    table += `<tr><td>齒頂隙係數</td><td>${val9}</td></tr>`;
    table += `<tr><td>齒冠高</td><td>${val10}</td></tr>`;
    table += `<tr><td>齒根高</td><td>${val11}</td></tr>`;
    table += `<tr><td>全齒高</td><td>${val12}</td></tr>`;
    table += `<tr><td>外徑</td><td>${val13}</td></tr>`;
    table += `<tr><td>齒頂圓直徑</td><td>${val14}</td></tr>`;
    table += `<tr><td>齒頂壓力角</td><td>${val15}</td></tr>`;

//gear2

    table += '<table border="gear2"><tr><th>gear2</th><th>Value</th></tr>';
    table += `<tr><td>模數</td><td>${m}</td></tr>`;
    table += `<tr><td>齒數</td><td>${z2}</td></tr>`;
    table += `<tr><td>壓力角</td><td>${phi}</td></tr>`;
    table += `<tr><td>轉位係數</td><td>${x2}</td></tr>`;
    table += `<tr><td>軸向壓力角</td><td>${hval1}</td></tr>`;
    table += `<tr><td>漸開線函數</td><td>${val1}</td></tr>`;
    table += `<tr><td>嚙合壓力角</td><td>${val2}</td></tr>`;
    table += `<tr><td>中心距變動係數</td><td>${val3}</td></tr>`;
    table += `<tr><td>中心距</td><td>${val4}</td></tr>`;

    val2_1 = m*z2/Math.cos(beta*(Math.PI/ 180));
    val2_2 = val2_1 * Math.cos(hval1*(Math.PI/ 180));
    val2_3 = val2_2 / Math.cos(val2*(Math.PI/ 180));
    val2_4 = (val8 + val3 - x1)* m;
    val2_5 = (val8 + val9 - x2) * m;
    val2_6 = val2_4 + val2_5;
    val2_7 = val2_1 + 2*val2_4;
    val2_8 = val2_1 - 2*val2_5;
    val2_9 = (Math.acos(val2_2 / val2_7))*(180/Math.PI);

    table += `<tr><td>節圓直徑</td><td>${val2_1}</td></tr>`;
    table += `<tr><td>基圓直徑</td><td>${val2_2}</td></tr>`;
    table += `<tr><td>嚙合節圓直徑</td><td>${val2_3}</td></tr>`;
    table += `<tr><td>齒冠高係數</td><td>${val8}</td></tr>`;
    table += `<tr><td>齒頂隙係數</td><td>${val9}</td></tr>`;
    table += `<tr><td>齒冠高</td><td>${val2_4}</td></tr>`;
    table += `<tr><td>齒根高</td><td>${val2_5}</td></tr>`;
    table += `<tr><td>全齒高</td><td>${val2_6}</td></tr>`;
    table += `<tr><td>外徑</td><td>${val2_7}</td></tr>`;
    table += `<tr><td>齒頂圓直徑</td><td>${val2_8}</td></tr>`;
    table += `<tr><td>齒頂壓力角</td><td>${val2_9}</td></tr>`;

    
    table += '</table>';

    container.innerHTML = table;
}

//mode2
function calculate_mode2(power,rpm,dpr,pressure_ang,helix){ 

    const container = document.getElementById('outputContent');
    let table = '<table border="gear1"><tr><th>名稱</th><th>數值</th></tr>';
    power = parseFloat(power);
    rpm = parseFloat(rpm);
    dpr = parseFloat(dpr);
    pressure_ang = parseFloat(pressure_ang);
    helix = parseFloat(helix);

    T = power / (rpm*2*Math.PI/60);
    Ft = 2* T/dpr;
    Fx = Ft *Math.tan(helix*(Math.PI/ 180));
    Fr = Ft * Math.tan(pressure_ang*(Math.PI/ 180))/Math.cos(helix*(Math.PI/ 180));
    table += `<tr><td>軸向力</td><td>${Ft}</td></tr>`;
    table += `<tr><td>切向力</td><td>${Fx}</td></tr>`;
    table += `<tr><td>徑向力</td><td>${Fr}</td></tr>`;
    
    container.innerHTML = table;
}

//mode3
function calculate_mode3(rpm,j,F,wt,m,dp){

    rpm = parseFloat(rpm);
    j = parseFloat(j);
    F = parseFloat(F);
    wt = parseFloat(wt);
    m = parseFloat(m);
    dp = parseFloat(dp);

    kv = 50 / (50 + Math.sqrt(100*rpm*dp));
    km = 1 + (F / 10 /dp) - 0.0375 + 0.000492*F + 0.127 + 0.622*Math.pow(10,-7)*F - 1.694*Math.pow(10,-7)*Math.pow(F,2);
    sc = wt*km/F/m/j/kv;

    const container = document.getElementById('outputContent');
    let table = '<table border="gear1"><tr><th>名稱</th><th>數值</th></tr>';
    table += `<tr><td>彎曲應力</td><td>${sc}</td></tr>`;
    container.innerHTML = table;
}

//mode4
function calculate_mode4(rpm,i,F,wt,dp,E1,E2,v1,v2){

    rpm = parseFloat(rpm);
    i = parseFloat(i);
    F = parseFloat(F);
    wt = parseFloat(wt);
    dp = parseFloat(dp);
    E1 = parseFloat(E1);
    E2 = parseFloat(E2);
    v1 = parseFloat(v1);
    v2 = parseFloat(v2);

    cv = 50 / (50 + Math.sqrt(100*rpm*dp));
    cm = 1 + (F / 10 /dp) - 0.0375 + 0.000492*F + 0.127 + 0.622*Math.pow(10,-3)*F - 1.694*Math.pow(10,-7)*Math.pow(F,2);
    cp = Math.sqrt(1/(Math.PI*((1-Math.pow(v1,2))/E1+(1-Math.pow(v2,2))/E2)));
    ss = cp*Math.sqrt(wt*cm/cv*1/(dp*F*i));
        
    const container = document.getElementById('outputContent');
    let table = '<table border="gear1"><tr><th>名稱</th><th>數值</th></tr>';
    table += `<tr><td>接觸應力</td><td>${ss}</td></tr>`;
    container.innerHTML = table;
}

//mode5
function calculate_mode5(sb,sc,N,T,v1,MG,hb1,hb2){

    sb = parseFloat(sb);
    sc = parseFloat(sc);
    N = parseFloat(N);
    T = parseFloat(T);
    v1 = parseFloat(v1);
    MG = parseFloat(MG);
    hb1 = parseFloat(hb1);
    hb2 = parseFloat(hb2);

    hbRatio = hb1 / hb2;
//kl
    if (N < Math.pow(10, 4)){
        kl = 1.47229; 
    } else if(N < Math.pow(10, 7)){ 
        kl = 2.466 * Math.pow(N,-0.056); 
    }else{
        kl = 1.4488 * Math.pow(N, -0.023);
    }
//kt
    if (T < 120){
        kt = 1; 
    }else { 
        kt = 647 / 775 + 9 * T / 3100;
    }
//kr    
    if(v1 == 90){
        kr = 0.85;
    }else if(v1 == 99){
        kr = 1;
    }else if(v1 == 99.9){
        kr = 1.25;
    }else if(v1 == 99.99){
        kr = 1.5;
    }else{
        kr = 1;
    }

//ch
    if (hbRatio < 1.2) {
        ch = 1; 
    }else if(hbRatio < 1.7){
        ch = 1+ (0.00898 * hbRatio - 0.00829) * (MG - 1);
    }else{
        ch = 1 + 0.0698 * (MG - 1);
    }
    sb = kl / kt / kr * sb;
    sc = kl * ch / kt / kr * sc;
    const container = document.getElementById('outputContent');
    let table = '<table border="gear1"><tr><th>名稱</th><th>數值</th></tr>';
    table += `<tr><td>材料抗彎曲強度</td><td>${sb}</td></tr>`;
    table += `<tr><td>材料抗接觸破壞強度</td><td>${sc}</td></tr>`;
    container.innerHTML = table;
}

//mode6
function calculate_mode6(bs,cs,sb,sc){
    bs= parseFloat(bs);
    cs = parseFloat(cs);
    sb = parseFloat(sb);
    sc = parseFloat(sc);

    Nb= sb / bs;
    Nc = sc / cs;
    const container = document.getElementById('outputContent');
    let table = '<table border="gear1"><tr><th>名稱</th><th>數值</th></tr>';
    table += `<tr><td>彎曲強度安全係數</td><td>${Nb}</td></tr>`;
    table += `<tr><td>接觸強度安全係數</td><td>${Nc}</td></tr>`;
    container.innerHTML = table;
}



function calculate(mode) {
    let outputText = '';
  
    if (mode === 'mode1') {
      // 获取 Mode 1 的输入值
      let m = document.getElementById('input1-mode1').value;
      let z1 = document.getElementById('input2-mode1').value;
      let z2 = document.getElementById('input3-mode1').value;
      let phi = document.getElementById('input4-mode1').value;
      let x1 = document.getElementById('input5-mode1').value;
      let x2 = document.getElementById('input6-mode1').value;
      let beta = document.getElementById('input7-mode1').value;
      
      //判斷是否有螺旋角
      if(beta == 0){
        spurgear(m,z1,z2,phi,x1,x2);

      }else{
        helixgear(m,z1,z2,phi,beta,x1,x2);
      }

      
    } else if (mode === 'mode2') {
      // 获取 Mode 2 的输入值
      
      let power = document.getElementById('input1-mode2').value;
      let rpm = document.getElementById('input2-mode2').value;
      let dpr = document.getElementById('input3-mode2').value;
      let pressure_ang = document.getElementById('input4-mode2').value;
      let helix = document.getElementById('input5-mode2').value;
      calculate_mode2(power,rpm,dpr,pressure_ang,helix);
      
    } else if (mode === 'mode3') {
        // 获取 Mode 3 的输入值
        
        let rpm = document.getElementById('input1-mode3').value;
        let j = document.getElementById('input2-mode3').value;
        let F = document.getElementById('input3-mode3').value;
        let wt = document.getElementById('input4-mode3').value;
        let m = document.getElementById('input5-mode3').value;
        let dp = document.getElementById('input5-mode3').value;
        calculate_mode3(rpm,j,F,wt,m,dp);
        
      }else if (mode === 'mode4') {
        // 获取 Mode 4 的输入值
        
        let rpm = document.getElementById('input1-mode4').value;
        let i = document.getElementById('input2-mode4').value;
        let F = document.getElementById('input3-mode4').value;
        let wt = document.getElementById('input4-mode4').value;
        let dp = document.getElementById('input5-mode4').value;
        let E1 = document.getElementById('input6-mode4').value;
        let E2 = document.getElementById('input7-mode4').value;
        let v1 = document.getElementById('input8-mode4').value;
        let v2 = document.getElementById('input9-mode4').value;
        calculate_mode4(rpm,i,F,wt,dp,E1,E2,v1,v2);
        
      }else if (mode === 'mode5') {
        // 获取 Mode 5 的输入值
        
        let sb = document.getElementById('input1-mode5').value;
        let sc = document.getElementById('input2-mode5').value;
        let N = document.getElementById('input3-mode5').value;
        let T = document.getElementById('input4-mode5').value;
        let v1 = document.getElementById('input5-mode5').value;
        let MG = document.getElementById('input6-mode5').value;
        let hb1 = document.getElementById('input7-mode5').value;
        let hb2  = document.getElementById('input8-mode5').value;

        calculate_mode5(sb,sc,N,T,v1,MG,hb1,hb2);
        
      }else if (mode === 'mode6') {
        // 获取 Mode 3 的输入值
        
        let bs = document.getElementById('input1-mode6').value;
        let cs = document.getElementById('input2-mode6').value;
        let sb = document.getElementById('input3-mode6').value;
        let sc = document.getElementById('input4-mode6').value;

        calculate_mode6(bs,cs,sb,sc);
        
      }
  
  
  }







  