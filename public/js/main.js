$(function() {
    
    alert('hii');
    
    $.get('/yair',function(data){
        console.log('Got data',data);
        
        $('#name.h2').text(data.basicInfo.firstName);
        $('#name.h1').text(data.basicInfo.lastName);
        $('#name.h3').text(data.basicInfo.title);
         
    
    
    
        
    });
    });