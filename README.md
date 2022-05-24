# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


find por id 
1) crear la ruta con el path /:id que nos permite pasar un param ej <Route path="/Prueba/:id" element={<Prueba/>}/>
2) crear un view donde va a estar nuestro componente ej carpeta views/prueba (rafce) return (<div>  <nuestroItem/> </div>)
3) crear un useState con valor NULL por defecto que cambiaremos mas adelante // const [idFilt, setIdFilt] = useState(null)
4) usar el useParams id (que es lo que queremos buscar osea el parametro id)   const { id } = useParams(); // buscamos el param

5) findear un array por id ej data.id, data.nombre o lo que querramos pasarle al id (paso 1) que debe ser igual a nuestro UseParams  const ProdFind = data.find((prod) => prod.id == id); 


6)en nuestro <LINK> debemos pasarle el path /${data.id} // osea array.id (recordar asignar al string el id)


  const [state, setState] = useState({ id,
    Nombre,
    category,
    Descripcion,
    Caracteristicas1,
    Caracteristicas2,
    Caracteristicas3,
    Caracteristicas4,
    Caracteristicas5,
    Caracteristicas6,
    Precio,
    img,
    Stock});

  useEffect(() => {
    setState(
      id,
      Nombre,
      category,
      Descripcion,
      Caracteristicas1,
      Caracteristicas2,
      Caracteristicas3,
      Caracteristicas4,
      Caracteristicas5,
      Caracteristicas6,
      Precio,
      img,
      Stock
    );
  }, [Nombre]);



 const getData = async () =>{
    const productosDb = collection(db,"detalle")
    try {
      const data = await getDocs(productosDb)
      const result = data.docs.map(doc => doc = {id:doc.id, ...doc.data()})
       const filtrado = result.find((prod) => prod.id == id)
       setProductos(filtrado)
 
    } catch (error) {
     console.log(error,"Error")  
    }

  }
  
  useEffect(() => {
    getData()
    console.log(productos)
    
  },[]);
