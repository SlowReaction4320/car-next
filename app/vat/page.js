import Image from "next/image";
import { register } from "react-hook-form"

export default function Home() {
    const handleForm = (e) => {
        e.preventDefault();
        const price = e.target.price.value;
        const vat = e.target.vat.value;
        const result = price * vat;
        e.target.result.value = result;
    }
    return (
        <div>
            <h1>VAT Calcuator</h1>
            <form onSubmit={handleForm}>
                <table>
                    <tbody>
                        <tr>
                            <td><label>Price:</label></td>
                            <td><input type="text" name="price" 
                            {...register("price")}/></td>
                        </tr>
                        <tr>
                            <td><label>VAT Rate:</label></td>
                            <td><input type="number" name="rate" value="0.07" readOnly
                            {...register("rate")}/></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><input type="submit" value="Calculate"
                             /></td>
                        </tr>
                        <tr>
                            <td><label>VAT:</label></td>
                            <td><input type="text" name="vat" {...register("vat")}/></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}
