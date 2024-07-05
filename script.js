
const contractAddress = "0x..."; // Replace with your contract address  
const abi = [...]; // Replace with your contract ABI  
const provider = new ethers.providers.Web3Provider(window.ethereum);  
const contract = new ethers.Contract(contractAddress, abi, provider);  

document.getElementById("add-grade-form").addEventListener("submit", async (e) =&gt; {  
    e.preventDefault();  
    const studentName = document.getElementById("student-name").value;  
    const subject = document.getElementById("subject").value;  
    const grade = document.getElementById("grade").value;  
    try {  
        const tx = await contract.addGrade(studentName, subject, grade);  
        await tx.wait();  
        document.getElementById("result").innerHTML = `Grade added successfully!`;  
    } catch (error) {  
        document.getElementById("result").innerHTML = `Error: ${error.message}`;  
    }  
});  

document.getElementById("update-grade-form").addEventListener("submit", async (e) =&gt; {  
    e.preventDefault();  
    const studentName = document.getElementById("student-name-update").value;  
    const subject = document.getElementById("subject-update").value;  
    const newGrade = document.getElementById("new-grade").value;  
    try {  
        const tx = await contract.updateGrade(studentName, subject, newGrade);  
        await tx.wait();  
        document.getElementById("result").innerHTML = `Grade updated successfully!`;  
    } catch (error) {  
        document.getElementById("result").innerHTML = `Error: ${error.message}`;  
    }  
});  

document.getElementById("get-grade-form").addEventListener("submit", async (e) =&gt; {  
    e.preventDefault();  
    const studentName = document.getElementById("student-name-get").value;  
    const subject = document.getElementById("subject-get").value;  
    try {  
        const grade = await contract.getGrade(studentName, subject);  
        document.getElementById("result").innerHTML = `Grade: ${grade}`;  
    } catch (error) {  
        document.getElementById("result").innerHTML = `Error: ${error.message}`;  
    }  
});  

document.getElementById("average-grade-form").addEventListener("submit", async (e) =&gt; {  
    e.preventDefault();  
    const subject = document.getElementById("subject-average").value;  
    try{  
            const averageGrade = await contract.averageGrade(subject);  
            document.getElementById("result").innerHTML = `Average Grade: ${averageGrade}`;  
          } catch (error) {  
            document.getElementById("result").innerHTML = `Error: ${error.message}`;  
          }  
        });  
