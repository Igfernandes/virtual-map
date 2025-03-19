export function ContactsProfile() {
  return (
    <div>
      <div className="flex mt-1 mb-1">
        <svg
          className="w-4 fill-red-400 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L96 0zM208 288l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zM496 192c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64z" />
        </svg>
        <h3>Contatos</h3>
      </div>
      <div className="pl-2">
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Telefone:</strong>
              </td>
              <td>
                <a href="tel:+55 (21) 9 9999-9999" className="ml-2 text-blue-700 ">
                  <i> +55 (21) 9 9999-9999</i>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Telefone:</strong>
              </td>
              <td>
                <a href="tel:+55 (21) 9 9999-9999" className="ml-2 text-blue-700">
                  <i> +55 (21) 9 9999-9999</i>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Email:</strong>
              </td>
              <td>
                <a href="mailto:empresa.test@mail.com" className="ml-2 text-blue-700">
                  <i> empresa.test@mail.com</i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
