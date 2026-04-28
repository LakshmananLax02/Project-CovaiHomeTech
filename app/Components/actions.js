"use server";

export async function sendBookingToTelegram(formData) {
 const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  // Clean the address line breaks for better Telegram display
  const displayAddress = formData.address ? formData.address.replace(/\n/g, ', ') : 'N/A';

  const text = `
🆕 *New Lead*
-------------------------------------------------
👤 *Name:* ${formData.name}
📞 *Mobile:* ${formData.mobile}
🛠️ *Service:* ${formData.serviceType}
🏷️ *Brand:* ${formData.brand}
📍 *Address:* ${displayAddress}
-------------------------------------------------
  `;

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: "Markdown",
      }),
    });

    if (response.ok) {
      // Return an object with 'success' so your frontend 'if (result.success)' works
      return { success: true }; 
    } else {
      const errorData = await response.json();
      console.error("Telegram API Error:", errorData);
      return { success: false };
    }
  } catch (error) {
    console.error("Network error:", error);
    return { success: false };
  }
}