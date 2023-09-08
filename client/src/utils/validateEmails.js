  // This function will allow us to make sure the inputs are validated emails. 
  //filter function will allow us to keep the invalid emails
  
  const re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  export default (emails) =>{
    const invalidEmails = emails.split(',')
      .map(email=> email.trim())
      .filter(email=> re.test(email) === false)

    if(invalidEmails.length){
      return `These emails are invalid: ${invalidEmails}`;
    }
    return null;
  }

