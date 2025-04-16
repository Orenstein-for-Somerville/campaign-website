// Netlify serverless function to handle Airtable submissions
exports.handler = async function(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  try {
    // Parse the incoming request body
    const data = JSON.parse(event.body);
    const email = data.email;
    
    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Email is required" })
      };
    }

    // Send to Airtable
    const response = await fetch('https://api.airtable.com/v0/appmdNjPjTLQP8fTS/tblOQEVotqxuoeOZQ', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Email: email,
              Source: 'Website Subscribe Form'
            }
          }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(JSON.stringify(errorData));
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    console.error('Airtable submission error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to subscribe" })
    };
  }
};
