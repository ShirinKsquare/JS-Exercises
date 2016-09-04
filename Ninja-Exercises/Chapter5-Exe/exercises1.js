function Bank(username, password) {
    var accounts = {};
    var id = 0;
    this.username = username;
    this.password = password;
    this.createaccount = function Clients(name, lastname, username, password, balance) {
        accounts[id] = {
            username: username,
            password: password,
            name: name,
            lastname: lastname,
            balance: balance
        };
        id++;
        return {
            viewaccount: function(user, pass) {
                if ((user == username) & (pass == password)) {


                    console.log("Hi, " + name + " " + lastname + ": your balance is: " + balance);
                    // why accounts[id].name doesn't work?
                } else
                    console.log("your username or password is not correct, try again")
            },
            getbalance: function(user, pass) {
                if ((user == username) & (pass == password))
                    return balance;
            },
            deposit: function(amount) {
                balance += amount;
                console.log("your balance is : " + " " + balance);
                return balance;
            },
            withdraw: function(amount) {
                if (balance > amount) {
                    balance -= amount;
                    console.log("your remaining balance is: " + " " + balance);
                    return balance;
                }
                return "Insufficient funds";
            }
        };
    };

}

var bank = new Bank("abj", "hg1@3");
var shirin = bank.createaccount("Shirin", "Sardar", "abj", "hg1@3", 1240);
shirin.viewaccount("abj", "hg1@3");
shirin.deposit(500);
shirin.withdraw(100);
shirin.withdraw(2000)

// output:
// Native Browser JavaScript
//
// Hi, Shirin Sardar: your balance is: 1240
// your balance is :  1740
// your remaining balance is:  1640
// => 'Insufficient funds'
