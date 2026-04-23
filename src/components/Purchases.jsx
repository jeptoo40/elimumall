const Purchases = () => {
    return (
      <div className="purchases-card">
        <h3>Recent Purchases</h3>
  
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Date</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Messages</th>
              <th>Contact</th>
              
            </tr>
          </thead>
  
          <tbody>
            <tr>
              <td>John Tiger</td>
              <td>Book 1</td>
              <td>KSh 1,000</td>
              <td className="success">Paid</td>
            </tr>
  
            <tr>
              <td>Mary Wanjohi</td>
              <td>Book B</td>
              <td>KSh 1,800</td>
              <td className="pending">Pending</td>
            </tr>
  
            <tr>
              <td>Alex Kimagut</td>
              <td>Book C</td>
              <td>KSh 1,500</td>
              <td className="success">Paid</td>

            </tr>

          </tbody>
        </table>
      </div>
    );
  };
  
  export default Purchases;