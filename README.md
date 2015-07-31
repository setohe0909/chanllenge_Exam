# challenge

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
# chanllenge_Exam

Se desarrolló una vista la cual se manipula directamente desde el DOM y se obtienen diferentes valores presentes en el scope. Vista (Está siendo un template usado con herramientas tipo Handlebars, mustache entre otros posibles).

##Vista

Esta obtiene todos los valores entregados desde un ingreso por elementos text desde la parte web, esperando ser procesados por el controlador  y entregar un response directamente en el doble binding de Angular.

##Controlador:

El controlador recibe cada uno de los valores entregados por la parte web esperando cada uno de estos, para inicialmente tener 3 eventos presentes con estos:

1- Realiza la creación de una matriz 3D de diferentes dimensiones.
2- Realiza el update de un valor en una coordenada en común.
3- Realiza la consulta de las coordenadas realizando la suma de estas:

De igual forma se construyó un solo controlador aprovechando el prototype presente en el objeto scope de Angular. De igual forma no se considero realizar más clases dado que mirando en modelamiento del problema podríamos considerar una matriz como un entidad específica que deriva de comportamientos propios de ella misma y no de otras entidades.

