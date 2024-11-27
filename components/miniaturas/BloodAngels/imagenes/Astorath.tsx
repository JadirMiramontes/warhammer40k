import { Text, Image, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function Barbguants(){
    return(
        <View>
           <>
        <Image resizeMode="stretch" style={styles.image} source={require('../Tyranidos/imagenes/Barbguants.png')} />
        <Text style={styles.border}>
          Habilidades
        </Text>
        <Text style={styles.descrip}>
          {'\n'}<Text style={styles.wapo}>Faccion:</Text> Synapse
          {'\n'}<Text style={styles.wapo}>Bombardeo de interrupción:</Text> En tu fase de Disparo, después de que esta unidad haya disparado, si una unidad de Infantería enemiga fue alcanzada por uno o más de esos ataques realizados por los biocañones de esta unidad, hasta el final del siguiente turno de tu oponente, esa unidad enemiga queda desorganizada.
          {'\n'}Mientras una unidad esté desorganizada, resta 2 a su característica Mover, y resta 2 a las tiradas de Avance y Carga que se hagan para ella.
        </Text>
        {/* Cabecera de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>AD</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>R</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>A</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>BS</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>S</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>AP</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>D</Text>
            </View>
          </>
        </View>
        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>

              <Text style={styles.cellText}><Text style={styles.wapo}>Bio-cannon [BLAST, HEAVY]</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>24"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>D6</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+"</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>5</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>0</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
          </>
        </View>
        {/* Cabecera de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>ACC</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>R</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>A</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>BS</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>S</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>AP</Text>
            </View>
            <View style={styles.tableCelltop}>
              <Text style={styles.headerText}>D</Text>
            </View>
          </>
        </View>
        {/* Filas de la tabla */}
        <View style={styles.tableRow}>
          <>
            <View style={styles.tableCell}>

              <Text style={styles.cellText}><Text style={styles.wapo}>Xenos claws and teeth</Text></Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>meele</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4+</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>4</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>0</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>1</Text>
            </View>
          </>
        </View>
        <>
          <Text style={styles.border}>
            Composicion de la min
          </Text>
          <Text style={styles.descrip}>■ 5-10 Barbgaunts
            {'\n'}Cada modelo está equipado con: bio-cañón; garras xenos y dientes.
            {'\n'}5 models ............................................................50 pts
          {'\n'}10 models .......................................................100 pts</Text>
        </>
      </> 
        </View>
    );
}

const styles = StyleSheet.create({
    border: { color: '#fff', fontWeight: 'bold', backgroundColor: '#2C0069', fontSize: 20, padding: 5, marginTop: 6, borderTopLeftRadius: 10, borderTopRightRadius: 10,
      marginLeft: 5,
      marginRight: 5,
     },
    descrip: {fontSize: 18,
      marginLeft: 5,
      marginRight: 5, 
      backgroundColor: '#C5ACE3', 
      color: '#000000', 
      paddingLeft: 3, 
      paddingRight: 3, 
      paddingBottom: 3, 
      borderBottomLeftRadius: 10, 
      borderBottomRightRadius: 10 },
    image: { width: width, height: 100, borderRadius: 20, marginTop: 15 },
    tableRow: {
      flexDirection: 'row', // Alinear elementos en fila
      borderBottomWidth: 1,
      borderBottomColor: '#2C0069',
    },
    tableCelltop: {
      flex: 1, // Distribuye equitativamente el espacio entre columnas
      alignItems: 'center', // Centra el contenido horizontalmente
      justifyContent: 'center', // Centra el contenido verticalmente
      padding: 5,
      backgroundColor: '#2C0069',
      marginTop: 5,
      fontSize: 10
    },
    tableCell: {
      flex: 1, // Distribuye equitativamente el espacio entre columnas
      alignItems: 'center', // Centra el contenido horizontalmente
      justifyContent: 'center', // Centra el contenido verticalmente
      padding: 5,
      backgroundColor: '#C5ACE3',
      fontSize: 10
    },
    headerText: {
      color: '#fff', fontWeight: 'bold', fontSize: 20
    },
    cellText: {
      fontSize: 14,
      color: '#000',
  
    },
    wapo: {
      color: '#2C0069',
      fontWeight: 'bold'
    },
    MinDes: {
      fontSize: 18, color: '#000000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3
    }
  });