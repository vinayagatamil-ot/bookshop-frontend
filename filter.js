
        // Get the query parameters from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const filter = urlParams.get('filter'); // e.g., "shoes"

        // Example logic to show filtered content
        if (filter === 'Arts and Culture') {
            document.getElementById('art').style.display = 'block';
            document.getElementById('sci').style.display = 'none';
            document.getElementById('eco').style.display = 'none';
            document.getElementById('eng').style.display = 'none';
            document.getElementById('med').style.display = 'none';
            document.getElementById('kid').style.display = 'none';
            document.getElementById('ups').style.display = 'none';
            document.getElementById('nov').style.display = 'none';

        }
        else if (filter === 'Science') {
            document.getElementById('sci').style.display = 'block';
            document.getElementById('art').style.display = 'none';
            document.getElementById('eco').style.display = 'none';
            document.getElementById('eng').style.display = 'none';
            document.getElementById('med').style.display = 'none';
            document.getElementById('kid').style.display = 'none';
            document.getElementById('ups').style.display = 'none';
            document.getElementById('nov').style.display = 'none';



        }
        else if (filter === 'Economics') {
            document.getElementById('eco').style.display = 'block';
            document.getElementById('sci').style.display = 'none';
            document.getElementById('art').style.display = 'none';
            document.getElementById('eng').style.display = 'none';
            document.getElementById('med').style.display = 'none';
            document.getElementById('kid').style.display = 'none';
            document.getElementById('ups').style.display = 'none';
            document.getElementById('nov').style.display = 'none';



        }
        else if (filter === 'Engineering') {
            document.getElementById('eng').style.display = 'block';
            document.getElementById('sci').style.display = 'none';
            document.getElementById('art').style.display = 'none';
            document.getElementById('eco').style.display = 'none';
            document.getElementById('med').style.display = 'none';
            document.getElementById('kid').style.display = 'none';
            document.getElementById('ups').style.display = 'none';
            document.getElementById('nov').style.display = 'none';



        }
        else if (filter === 'Medical') {
            document.getElementById('med').style.display = 'block';
            document.getElementById('sci').style.display = 'none';
            document.getElementById('art').style.display = 'none';
            document.getElementById('eng').style.display = 'none';
            document.getElementById('eco').style.display = 'none';
            document.getElementById('kid').style.display = 'none';
            document.getElementById('ups').style.display = 'none';
            document.getElementById('nov').style.display = 'none';



        }
        else if (filter === 'Kids Stories') {
            document.getElementById('kid').style.display = 'block';
            document.getElementById('sci').style.display = 'none';
            document.getElementById('art').style.display = 'none';
            document.getElementById('eng').style.display = 'none';
            document.getElementById('med').style.display = 'none';
            document.getElementById('eco').style.display = 'none';
            document.getElementById('ups').style.display = 'none';
            document.getElementById('nov').style.display = 'none';



        }
        else if (filter === 'UPSC') {
            document.getElementById('ups').style.display = 'block';
            document.getElementById('sci').style.display = 'none';
            document.getElementById('art').style.display = 'none';
            document.getElementById('eng').style.display = 'none';
            document.getElementById('med').style.display = 'none';
            document.getElementById('kid').style.display = 'none';
            document.getElementById('eco').style.display = 'none';
            document.getElementById('nov').style.display = 'none';



        }
        else if (filter === 'Novels') {
            document.getElementById('nov').style.display = 'block';
            document.getElementById('sci').style.display = 'none';
            document.getElementById('art').style.display = 'none';
            document.getElementById('eng').style.display = 'none';
            document.getElementById('med').style.display = 'none';
            document.getElementById('kid').style.display = 'none';
            document.getElementById('ups').style.display = 'none';
            document.getElementById('eco').style.display = 'none';



        }
        else {
            document.getElementById('fc').style.display = 'flex';
        }
    