import { useState } from 'react'
import axios from 'axios'

function App() {
  const [apiResponse, setApiResponse] = useState<any>(null)
  const [error, setError] = useState<any>(null)

  const testApiPost = async () => {
    try {
      // Testing with invalid data to trigger the error
      const response = await axios.post('http://localhost:4001/api/user', {
        email: "invalid-email",
        role: "invalid-role"
      })
      
      setApiResponse(response.data)
      setError(null)
    } catch (err: any) {
      // Capturing the error response data
      const errorData = err.response?.data || err.message
      setError(errorData)
      setApiResponse(null)
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>API Test</h1>
      
      <button 
        onClick={testApiPost}
        style={{
          padding: '10px 20px',
          marginBottom: '20px',
          cursor: 'pointer'
        }}
      >
        Test POST Request
      </button>

      {error && (
        <div style={{ 
          backgroundColor: '#ffebee', 
          padding: '20px', 
          borderRadius: '4px',
          marginTop: '20px'
        }}>
          <h3 style={{ color: '#d32f2f', margin: '0 0 10px 0' }}>Error Response:</h3>
          {error.message && Array.isArray(error.message) ? (
            <ul style={{ color: '#d32f2f', margin: 0 }}>
              {error.message.map((msg: string, index: number) => (
                <li key={index}>{msg}</li>
              ))}
            </ul>
          ) : (
            <pre style={{ 
              color: '#d32f2f', 
              margin: 0,
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word'
            }}>
              {JSON.stringify(error, null, 2)}
            </pre>
          )}
          <p style={{ 
            color: '#d32f2f', 
            marginTop: '10px',
            fontWeight: 'bold' 
          }}>
            Status Code: {error.statusCode || 'N/A'}
          </p>
        </div>
      )}

      {apiResponse && (
        <div style={{ 
          backgroundColor: '#e8f5e9', 
          padding: '20px', 
          borderRadius: '4px',
          marginTop: '20px'
        }}>
          <h3 style={{ color: '#2e7d32', margin: '0 0 10px 0' }}>Success Response:</h3>
          <pre style={{ margin: 0 }}>
            {JSON.stringify(apiResponse, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}

export default App