
class SubmitForm extends React.Component{
    constructor(props){
        super(props)

        this.state={
            input:'Hey there, I would like a Website, can you give more details please',
            submit:'',
            success:'',
            user:'',
            userName:'',
            name:'',
            nameSubmit:'',
            phone:'',
            phoneSubmit:''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUser = this.handleUser.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
    }

    handleChange(event){
        this.setState({
            input:event.target.value,
        })
    }
    handleUser(event){
        this.setState({
            user:event.target.value
        })
    }
    handleName(event){
        this.setState({
            name:event.target.value
        })
    }
    handlePhone(event){
        this.setState({
            phone:event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        this.setState({
            submit:this.state.input,
            success:"Message Sent Successfully!",
            nameSubmit:this.state.name,
            phoneSubmit:this.state.phone,
            userName:"Sender:"+this.state.name,
        })
    }
    
    render(){
        return(
            <div className="container-fluid ">
      
            <br/>
                <form className="form-control" onSubmit={this.handleSubmit}>
                    <h1 className="text-center  text-warning">Contact Me</h1>
                    <label>Name:&nbsp;<input required='true' name="user_name" value={this.state.name} onChange={this.handleName}/></label>
                    <br/><br/>
                    <label>Phone:<input required='true' type="number" value={this.state.phone} onChange={this.handlePhone}/></label>
                    <br/><br/>
                    <label>Email:<input required='true' type="email" name="user_email" value={this.state.value} onChange={this.handleUser}/></label>
                    <br/><br/>
                    <h5 className="text-center text-muted">Compose A Message</h5>
                    <textarea name="message" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder={this.state.input}></textarea>
                    <br/>
                    <div className="text-center">
                        <button type="submit" className="btn btn-success" value="Send">SUBMIT</button>
                    </div>
                </form>
                <br/><br/>
                <div className="">
                    <h3 className="text-success card-title">{this.state.success}</h3>
                    <h5>{this.state.userName}</h5>
                    <p className="text-">{this.state.submit}</p>
                </div>
               
            </div>
        )
    }
}

ReactDOM.render(<SubmitForm/>,document.getElementById("root"))