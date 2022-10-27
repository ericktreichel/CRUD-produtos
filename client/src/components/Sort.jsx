<form>
    <input
        onChange={handleSort}
        list="sorting"
        placeholder="Choose how to sort:"
    />

    <datalist id="sorting">
        <option name="Name" value="Name" id="byname" />
        <option name="Price" value="Price" id="byprice" />
        <option value="Stock" id="bystock" />
        <option value="Last modified" id="bymod" />
    </datalist>
</form>;
