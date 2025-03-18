const DriverForm = () => {
    return (
        <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
    
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
    
        <label htmlFor="drivLicense">Driver's License:</label>
        <input type="text" id="drivLicense" name="drivLicense" />
    
        <button type="submit">Submit</button>
        </form>
    );
}
export default DriverForm;