                function createProject (){
                    var formDataArray = ($("#createProjectForm").serializeArray());
                    var formData = {};
                    console.log(formDataArray);

                    for (var i = 0; i < formDataArray.length; i++ ){
                        formData[$("#createProjectForm")[0][i].name] = $("#createProjectForm")[0][i].value
                        // formData[i][(formDataArray[i].value)]
                    };
                    
                    console.log(formData);
                    console.log(JSON.stringify(formData));
                    $.ajax({
                        type: "POST",
                        url: "api/projects",
                        data: JSON.stringify(formData),
                        success: function(){},
                        dataType: "json",
                        contentType : "application/json"
                    });

                    window.location.href = '/';
                }
            