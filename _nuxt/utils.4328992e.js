function u(i,o,t){var e=i=="0"?"+":"-",l=!1,r=parseInt(o,2)-127;r==-127&&(r=-126,l=!0);let f=.5;for(var a=l?0:1,n=0;n<t.length;n++)t[n]==1&&(a+=f),f/=2;return r==128?a==1?[e,128,1/0]:[e,128,NaN]:[e,r,a]}export{u as getFloatingPointVals};
