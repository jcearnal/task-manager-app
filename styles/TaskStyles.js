import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  taskIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: 'white',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  taskDescription: {
    fontSize: 14,
    color: '#ccc',
  },
  taskDate: {
    fontSize: 12,
    color: '#bbb', // Lighter color for date
    marginTop: 5,
  },
  bold: {
    fontWeight: 'bold',
    color: 'white',
  },
  completeButton: {
    backgroundColor: '#03dac6',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  deleteContainer: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
    borderRadius: 8,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
