// Import the LoadingPage component from the '../outstanding/LoadingPage.jsx' file.
import LoadingPage from '../outstanding/LoadingPage.jsx';

// Define a functional component named PageController.
export default function PageController() {
    // Within the component's body, return the LoadingPage component.
    // This means that when the PageController component is used, it will render the LoadingPage component.
    return (
        <LoadingPage />
    );
}
